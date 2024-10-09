<template>
  <body>
    <p>Compliant Form</p>
    <div class="form-container">
      <form>
        <!--Image Selction Difs-->
        <label>
          <div class="imageDivs">
            <input type="radio" name="ingestRadio" value="small" checked />
            <img src="../assets/pillandtablet.webp" alt="pill" />
            <p>Pill</p>
          </div>
        </label>
        <label>
          <div class="imageDivs">
            <input type="radio" name="ingestRadio" value="small" />
            <img src="../assets/pillandtablet.webp" alt="pill" />
            <p>Pill</p>
          </div>
        </label>
        <label>
          <div class="imageDivs">
            <input type="radio" name="ingestRadio" value="small" />
            <img src="../assets/pillandtablet.webp" alt="pill" />
            <p>Pill</p>
          </div>
        </label>
        <label>
          <div class="imageDivs">
            <input type="radio" name="ingestRadio" value="small" />
            <img src="../assets/pillandtablet.webp" alt="pill" />
            <p>Pill</p>
          </div>
        </label>
        <!--Text Box-->
        <br />
        <label for="textBox">Description</label>
        <input type="text" id="textBox" name="descriptionBox" required="true" />
        <!--Submit button-->
        <br />
        <br />
        <input type="button" id="submit" name="submitButton" value="Submit" />
      </form>
    </div>
  </body>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ComplaintForms",
});
</script>

<style>
/* HIDE RADIO */
[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
[type="radio"] + img {
  cursor: pointer;
}

/* CHECKED STYLES */
[type="radio"]:checked + img {
  outline: 2px solid #f00;
}

img {
  width: 200px;
}

/*
.form-container {
  display: inline-flex;
}
*/

.imageDivs {
  display: inline-block;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

label {
  text-align: justify;
}

input[type="text"] {
  width: 450px;
  height: 300px;
}

input[type="button"] {
  display: block;
  padding: 12px 20px;
  background-color: #0888de; /* Light pastel background */
  color: #333;
  border: none;
  border-radius: 20px; /* Rounded corners */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  width: 10%;
  transition: all 0.3s ease; /* Smooth transition for hover effects */
  margin: auto;
}

input[type="button"]:hover {
  background-color: #0464a4; /* Slightly darker shade on hover */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* More pronounced shadow */
}

input[type="button"]:active {
  transform: scale(0.98); /* Slight press effect */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Less shadow when pressed */
}
</style>
