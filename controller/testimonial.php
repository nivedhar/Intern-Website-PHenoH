<div id="testimonial{count}" data-id="{count}" class="testimonial-group form-group col-xs-6">
    <h3>Testimonial #{count}</h3>
    <label>Title : </label>
    <input type="text" name="testimonial_form[{count}][title]" value="{title}" class="form-control title{count}">
    <label>Name : </label>
    <input type="text" name="testimonial_form[{count}][name]" value="{name}" class="form-control name{count}">
    <label>Description : </label>
    <textarea rows="4" cols="50" name="testimonial_form[{count}][description]" class="form-control description{count}">{description}</textarea>
    <input type="hidden" name="testimonial_form[{count}][id_testimonial]" value="{id_testimonial}">
</div>