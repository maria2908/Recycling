<script>
import emailjs from 'emailjs-com';
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});

export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    sendEmail() {
      const templateParams = {
        from_name: this.name,
        from_email: this.email,
        message: this.message
      };

      emailjs.send('service_u2l2oam', 'template_i6nul2f', templateParams, 'PhgvgsCyJAJxrTpJK')
          .then((response) => {
            console.log('Email sent successfully:', response);
            console.log('Email sent successfully!');

            this.name = '';
            this.email = '';
            this.message = '';
          })
          .catch((error) => {
            console.error('Error sending email:', error);
            console.log('An error occurred while sending the email.');
          });
    }
  }
};
</script>

<template>
  <div class="contact flex justify-between pt-12" style="height: 100vh; ">
    <div class="images" style="width: 52.5%;">
      <img src="https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
      <img src="https://cdn.pixabay.com/photo/2017/08/16/10/54/waste-2647287_640.jpg">
      <img src="https://images.pexels.com/photos/850216/pexels-photo-850216.jpeg?auto=compress&cs=tinysrgb&w=600">
      <img src="https://cdn.pixabay.com/photo/2019/07/23/17/19/trash-4358272_640.jpg">
      <img src="https://cdn.pixabay.com/photo/2020/04/16/15/23/containers-5051093_640.jpg">
      <img src="https://images.pexels.com/photos/3457243/pexels-photo-3457243.jpeg?auto=compress&cs=tinysrgb&w=600">
    </div>
    <div class="form mx-auto pt-20" style="width: 25%">
      <form class="block mt-24"  @submit.prevent="sendEmail">
        <h1 class="text-5xl font-bold mb-6">{{ $t('contact-us.title') }}</h1>
        <p class="my-4">{{ $t('contact-us.text') }}</p>
        <div class="relative h-11 w-full min-w-[200px] my-4">
          <input
              v-model="name"
              placeholder="Alex"
              name="name"
              class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
          <label
              class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Name
          </label>
        </div>
        <div class="relative h-11 w-full min-w-[200px] my-4">
          <input
              v-model="email"
              placeholder="asd20@gmail.com"
              name="email"
              class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
          <label
              class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Email
          </label>
        </div>
        <div class="relative min-w-[200px] my-4">
          <textarea
              v-model="message"
              class="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "></textarea>
          <label
              class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-900 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Message
          </label>
        </div>
        <button type="submit" class="text-black mt-8 py-4 w-full bg-my-yellow rounded">{{ $t('contact-us.send') }}</button>
      </form>
    </div>
    <div class="links block my-auto mr-8">
      <a href="mailto:maria.spam2002@gmail.com">
        <div class="mt-4 p-4 rounded-xl" style="background-color: rgba(5,130,64,0.15)">
            <svg width="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#058240" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
        </div>
      </a>
      <a href="tel:01602417136">
        <div class="mt-4 p-4 rounded-xl" style="background-color: rgba(5,130,64,0.15)">
            <svg width="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#058240" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
        </div>
      </a>
      <a href="https://www.google.com/maps/place/Amberger+Str.+180,+93057+Regensburg/@49.048593,12.0988491,17z/data=!3m1!4b1!4m5!3m4!1s0x479fc1d15f1383f7:0xb5e53f3d9485f9d7!8m2!3d49.0485895!4d12.101424?entry=ttu">
        <div class="mt-4 p-4 rounded-xl" style="background-color: rgba(5,130,64,0.15)">
          <svg width="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#058240" d="M288 48c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48V192h40V120c0-13.3 10.7-24 24-24s24 10.7 24 24v72h24c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H432 336c-26.5 0-48-21.5-48-48V48zm64 32v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zm16 80c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H368zM352 272v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zm176-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H528zM512 368v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H528c-8.8 0-16 7.2-16 16zM224 160c0 6-1 11-2 16c20 14 34 38 34 64c0 45-36 80-80 80H160V480c0 18-15 32-32 32c-18 0-32-14-32-32V320H80c-45 0-80-35-80-80c0-26 13-50 33-64c-1-5-1-10-1-16c0-53 42-96 96-96c53 0 96 43 96 96z"/></svg>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media (max-width: 425px) {
  .contact {
    display: block !important;
    .images {
      display: none !important;
    }
    .form {
      width: 100% !important;
      padding: 0 !important;
    }
    .links {
      display: flex;
      align-items: center;
      position: absolute;
      bottom: -25%;
      left: 20% !important;
      width: 20% !important;
    }
  }
}
@media (max-width: 768px) {
  .contact {
    display: flex !important;
    .images {
      width: 50% !important;
      height: 50%;
    }
    .form {
      width: 50% !important;
      padding: 20px;
    }
    .links {
      display: flex !important;
      align-items: center;
      position: absolute;
      left: 10%;
      top: 55%;
    }
  }
}
  .contact {
    .links {
      display: block;
    }
    .images {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .body--dark & {
      background-color: #151515;
      color: white;

      .form input, textarea {
        border-bottom:1px solid white !important;
      }

      .info {
        background: white !important;
        color: black !important;
      }
    }
    .body--light & {
      background-color: white;
      color: black;

    }
  }
</style>