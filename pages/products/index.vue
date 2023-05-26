<template>
    <div class="products">
        <div class="container">
            <div class="row row-product-holder">
                <div class="col-md-6 col-product-holder">
                    <div class="product">
                        <h2>Электрогитара</h2>
                    </div>
                </div>
                <div class="col-md-6 col-product-holder">
                    <div class="product">
                        <h2>Микрофон</h2>
                    </div>
                </div>
                <div class="col-md-6 col-product-holder">
                    <div class="product">
                        <h2>Микрофон</h2>
                    </div>
                </div>
                <div class="col-md-6 col-product-holder">
                    <div class="product">
                        <h2>Электрогитара</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.row-product-holder {
    margin-left: 0 !important;
    margin-right: 0 !important;

    .col-product-holder {
        padding-left: 0 !important;
        padding-right: 0 !important;

        .product {
            padding: 8px;
            border: 1px solid #eeeeee;
            border-radius: 12px;
        }
    }
}
</style>