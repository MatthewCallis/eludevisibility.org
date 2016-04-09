---
layout: page
title: Contribute
date: 2016-04-08 12:00:00
permalink: /contribute/
tagline: "Submit a ROM, documents, or something related- contribute anything!"
---

If you have something you would like to submit, please fill out the form below.

<form id="contribute" action="/u.php" method="post" enctype="multipart/form-data">
  <fieldset>
    <div class="row">
      <label for="category">Category</label>
      <input type="text" id="category" name="category" placeholder="Example: Super Famicom"/>
      <p class="hint">If multiple, separate with a comma.</p>
    </div>

    <div class="row">
      <label for="title">Title</label>
      <input type="text" id="title" name="title"/>
      <p class="hint">The proposed title for the item you are submitting.</p>
    </div>

    <div class="row">
      <label for="description">Description</label>
      <textarea id="description" name="description"></textarea>
      <p class="hint">Anything about the item you would like to share, along with your name and if you would like to be attributed.</p>
    </div>

    <div class="row">
      <label for="title">Files</label>
      <input type="file" name="files[]" id="files" multiple/>
      <p class="hint">The files, preferably compressed into ZIP or 7Z or some other losslessly compressed format.</p>
    </div>

    <button type="submit" class="primary">Submit</button>
  </fieldset>
</form>
