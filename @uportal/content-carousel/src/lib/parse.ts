import * as util from 'util';
import {parseString} from 'xml2js';

function convert(json: any): any {
  let channel = json.rss.channel;
  const rss: { items: any[]; [propName: string]: any } = {items: []};
  if (Array.isArray(json.rss.channel)) {
    channel = json.rss.channel[0];
  }

  if (channel.title) {
    rss.title = channel.title[0];
  }
  if (channel.description) {
    rss.description = channel.description[0];
  }
  if (channel.link) {
    rss.url = channel.link[0];
  }

  if (channel.image) {
    rss.image = channel.image[0].url;
  }

  rss.image = rss.image && Array.isArray(rss.image) ? rss.image[0] : '';

  if (channel.item) {
    if (!Array.isArray(channel.item)) {
      channel.item = [channel.item];
    }
    channel.item.forEach((val: any) => {
      const obj = {} as any;
      obj.title = !util.isNullOrUndefined(val.title) ? val.title[0] : '';
      obj.description = !util.isNullOrUndefined(val.description)
        ? val.description[0]
        : '';
      obj.url = obj.link = !util.isNullOrUndefined(val.link) ? val.link[0] : '';

      if (val.pubDate) {
        obj.created = Date.parse(val.pubDate[0]);
      }
      if (val['media:content']) {
        obj.media = val.media || {};
        obj.media.content = val['media:content'];
      }
      if (val.enclosure) {
        const enclosures: any[] = [];
        const regexp: RegExp = RegExp('image');
        if (!util.isArray(val.enclosure)) {
          val.enclosure = [val.enclosure];
        }
        val.enclosure.forEach((enclosure: any) => {
          let enc: any;
          let x: any;
          for (x of Object.keys(enclosure)) {
            enc = {...enclosure[x]};
          }
          enclosures.push(enc);
        });
        obj.enclosures = enclosures
            .filter((enc: any) => regexp.test(enc.type))
            .map((enc: any) => enc.url);
      }
      rss.items.push(obj);
    });
  }
  return rss;
}

export function parseXml(xml: string): Promise<any> {
  return new Promise((resolve, reject) => {
    parseString(xml, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(convert(result));
      }
    });
  });
}
