<div id="fact{num}" data-id="{num}" class="fact-group form-group col-xs-3">
    <h3>Fun Fact #{num}</h3>
    <label>Description : </label>
    <input type="text" name="fact_form[{num}][description]" value="{description}" class="form-control desc{num}">
    <label>Fact : </label>
    <input type="text" name="fact_form[{num}][fact]" value="{fact}" class="form-control fact{num}">
    <label>Icon Class : </label>
    <input type="text" name="fact_form[{num}][icon_class]" value="{icon_class}" class="form-control class{num}">
    <input type="hidden" name="fact_form[{num}][id_fact]" value="{id_fact}">
</div>