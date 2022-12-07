import Main from './main.js';

export default class extends Main {
  constructor(params) {
    super(params);
    this.setTitle('Contact Us');
  }

  // html section for contact
  getDoc = async () => `<section class="contact-me">
  <div class="container-contact-me">
      <h3 class="contact-h3">Contact Information</h3>
      <p>Do you want to contact me? Do you have any questions to ask me? You can reach out to me via this methods</p>
      <ul>
          <li>Our email: Stevenmukama1@gmail.com</li>
          <li>Our Phone Number 0782105368</li>
          <li>Our address Rwanda, Kigali/li>
      </ul>
  </div>
  
</section>`
}