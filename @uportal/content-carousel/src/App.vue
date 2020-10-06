<template>
  <main>
    <section>
      <content-carousel
        :type="'rss'"
        :source="'/hero.rss'"
        :slick-options="heroOptions"
        :carousel-height="heroHeight"
        :fit-to-container="true"
        :text-align="alignText"
      />
    </section>
    <section class="content">
      <content-carousel
        :type="'rss'"
        :source="'/news.rss.txt'"
        :slick-options="contentOptions"
        :carousel-height="contentHeight"
        class="primary"
      />
    </section>
    <section class="content">
      <content-carousel
        :type="'rss'"
        :source="'/content.rss'"
        :slick-options="contentOptions"
        :carousel-height="contentHeight"
        class="primary"
      />
    </section>
    <section class="content">
      <content-carousel
        :type="'rss'"
        :source="'/content-image.rss'"
        fit-to-container="true"
        slick-options='{
          "slidesToShow": 6,
          "infinite": true,
          "arrows": true,
          "dots": true,
          "variableWidth": false,
          "responsive": [
            {
              "breakpoint": "768",
              "settings": {
                "slidesToShow": 2,
                "slidesToScroll": 2,
                "dots": false
              }
            }
          ]
        }'
        :carousel-height="contentHeight"
        class="flush"
      />
    </section>
    <section class="content">
      <content-carousel
        :type="'rss'"
        :source="'/empty.rss'"
        :slick-options="contentOptions"
        :carousel-height="contentHeight"
      />
    </section>
    <section class="content">
      <content-carousel
        :type="'portlet'"
        :source="'/portletRegistry.json'"
        :slick-options="portletOptions"
        :carousel-height="portletHeight"
      />
    </section>
    <section class="content">
      <content-carousel
        :type="'passthrough'"
        :slick-options="contentOptions"
        :carousel-height="portletHeight"
        class="flush"
      >
        <div class="slick-item has-image has-description">
          <img src="/stock-photo.jpg" class="slick-image" />
          <span class="slick-title">Title Goes Here</span>
          <p class="slick-item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            rhoncus tincidunt semper. Vivamus luctus sem tincidunt neque
            convallis malesuada. Etiam eget nisl faucibus, tempor ligula
            interdum, luctus elit.
          </p>
        </div>
        <div class="slick-item has-image has-description">
          <img src="/stock-photo.jpg" class="slick-image" />
          <span class="slick-title">Title Goes Here</span>
          <p class="slick-item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            rhoncus tincidunt semper. Vivamus luctus sem tincidunt neque
            convallis malesuada. Etiam eget nisl faucibus, tempor ligula
            interdum, luctus elit.
          </p>
        </div>
        <div class="slick-item has-image has-description">
          <img src="/stock-photo.jpg" class="slick-image" />
          <span class="slick-title">Title Goes Here</span>
          <p class="slick-item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            rhoncus tincidunt semper. Vivamus luctus sem tincidunt neque
            convallis malesuada. Etiam eget nisl faucibus, tempor ligula
            interdum, luctus elit.
          </p>
        </div>
        <div class="slick-item has-image has-description">
          <img src="/stock-photo.jpg" class="slick-image" />
          <span class="slick-title">Title Goes Here</span>
          <p class="slick-item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            rhoncus tincidunt semper. Vivamus luctus sem tincidunt neque
            convallis malesuada. Etiam eget nisl faucibus, tempor ligula
            interdum, luctus elit.
          </p>
        </div>
        <div class="slick-item has-image has-description">
          <img src="/stock-photo.jpg" class="slick-image" />
          <span class="slick-title">Title Goes Here</span>
          <p class="slick-item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            rhoncus tincidunt semper. Vivamus luctus sem tincidunt neque
            convallis malesuada. Etiam eget nisl faucibus, tempor ligula
            interdum, luctus elit.
          </p>
        </div>
      </content-carousel>
    </section>
  </main>
</template>
<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>
