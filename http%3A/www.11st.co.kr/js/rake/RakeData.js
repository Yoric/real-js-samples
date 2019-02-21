var RakeData = function() {
        this.data = {}
    },
    rdproto = RakeData.prototype;

var ContentType = {
    PRODUCT : "PRODUCT",
    MINIMALL : "MINIMALL",
    EVENT : "EVENT",
    BANNER : "BANNER",
    SELLER : "SELLER",
    CATEGORY : "CATEGORY",
    TEXT : "TEXT",
    BRAND : "BRAND",
    EXHIBITION : "EXHIBITION",
    CATALOG : "CATALOG",
    COUPON : "COUPON",
    CATALOG_ATTR : "CATALOG_ATTR",
    MOVIE : "MOVIE",

    META_CATEGORY : "META_CATEGORY",
    SHOPPINGTALK : "SHOPPINGTALK",
    NOTICE : "NOTICE",
    ATTRIBUTE : "ATTRIBUTE"

};

rdproto.ContentType = ContentType;

rdproto.getData = function() { return this.data; };
rdproto.setPageId = function(value) { this.data.page_id = value; };
rdproto.setPageVersion = function(value) { this.data.page_version = value; };
rdproto.setBtnName = function(value) { this.data.btn_name = value; };
rdproto.setCellType = function(value) { this.data.cell_type = value; };
rdproto.setContentNo = function(value) { this.data.content_no = value; };
rdproto.setContentName = function(value) { this.data.content_name = value; };
rdproto.setContentType = function(value) { this.data.content_type = value; };
rdproto.setContentImageUrl = function(value) { this.data.content_image_url = value; };
rdproto.setContentNo2 = function(value) { this.data.content_no2 = value; };
rdproto.setContentName2 = function(value) { this.data.content_name2 = value; };
rdproto.setContentType2 = function(value) { this.data.content_type2 = value; };
rdproto.setLinkUrl = function(value) { this.data.link_url = value; };
rdproto.setPositionL1 = function(value) { this.data.position_l1 = value; };
rdproto.setPositionL2 = function(value) { this.data.position_l2 = value; };
rdproto.setPositionL3 = function(value) { this.data.position_l3 = value; };

rdproto.setTrcNo = function(value) { this.data.trc_no = value; };
rdproto.setAdYn = function(value) { this.data.ad_yn = value; };
rdproto.setAdTypGubn = function(value) { this.data.ad_typ_gubn = value; };
rdproto.setAdAreaGubn = function(value) { this.data.ad_area_gubn = value; };
rdproto.setDispSpceNo = function(value) { this.data.disp_spce_no = value; };
rdproto.setDispSpceId = function(value) { this.data.disp_spce_id = value; };
rdproto.setAdRank = function(value) { this.data.ad_rank = value; };

rdproto.setProductNo = function(value) { this.data.product_no = value; };
rdproto.setProductName = function(value) { this.data.product_name = value; };
rdproto.setProductPrice = function(value) {this.data.product_price = value.replace(/[^\d]+/g, '');};
rdproto.setLastDiscountPrice = function(value) {this.data.last_discount_price = value.replace(/[^\d]+/g, '');};
rdproto.setLargeCategoryNo = function(value) { this.data.large_category_no = value; };
rdproto.setMiddleCategoryNo = function(value) { this.data.middle_category_no = value; };
rdproto.setSmallCategoryNo = function(value) { this.data.small_category_no = value; };
rdproto.setDetailCategoryNo = function(value) { this.data.detail_category_no = value; };
rdproto.setSellerNo = function(value) { this.data.seller_no = value; };
rdproto.setParentNo = function(value) { this.data.parent_no = value; };
rdproto.setParentName = function(value) { this.data.parent_name = value; };
rdproto.setParentType = function(value) { this.data.parent_type = value; };
rdproto.setContentAreaName = function(value) { this.data.content_area_name = value; };

rdproto.setPlanThemeNo = function(value) { this.data.plan_theme_no = value; };
rdproto.setPlanThemeName = function(value) { this.data.plan_theme_name = value; };

rdproto.search_keyword = function(value) { this.data.search_keyword = value; };
rdproto.search_call_id = function(value) { this.data.search_call_id = value; };
rdproto.search_result_cnt = function(value) { this.data.search_result_cnt = value; };
rdproto.search_view_type = function(value) { this.data.search_view_type = value; };
rdproto.search_sort_type = function(value) { this.data.search_sort_type = value; };
rdproto.page_no = function(value) { this.data.page_no = value; };
rdproto.search_include_keyword = function(value) { this.data.search_include_keyword = value; };
rdproto.search_except_keyword = function(value) { this.data.search_except_keyword = value; };
rdproto.search_category_no = function(value) { this.data.search_category_no = value; };
rdproto.search_brand_code = function(value) { this.data.search_brand_code = value; };
rdproto.search_seller_nos = function(value) { this.data.search_seller_nos = value; };
rdproto.search_max_price = function(value) { this.data.search_max_price = value; };
rdproto.search_min_price = function(value) { this.data.search_min_price = value; };
rdproto.search_benefit = function(value) { this.data.search_benefit = value; };
rdproto.search_attribute = function(value) { this.data.search_attribute = value; };
rdproto.search_ad_show = function(value) { this.data.search_ad_show = value; };
rdproto.search_custom_yn = function(value) { this.data.search_custom_yn = value; };
rdproto.search_custom_key = function(value) { this.data.search_custom_key = value; };
rdproto.search_no_result_yn = function(value) { this.data.search_no_result_yn = value; };

rdproto.setCurrentPrdNo = function(value) { this.data.current_product_no = value; };

rdproto.send_impression = function (value) { this.data.send_impression = value };
