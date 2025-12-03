---
layout: layouts/base.njk
title: Contact
---
<section class="section">
  <h1>Book a collaboration</h1>
  <p class="lead">Tell me about your offer, affiliate goals, and launch timeline. I respond within two business days with next steps or a short Loom.</p>
  <div class="card">
    <form name="contact" method="post" data-netlify="true" class="contact-form">
      <label>Full name
        <input type="text" name="name" required />
      </label>
      <label>Email
        <input type="email" name="email" required />
      </label>
      <label>Company / Product
        <input type="text" name="company" />
      </label>
      <label>Project details
        <textarea name="message" rows="6" placeholder="Share launch goal, target audience, KPIs, timeline" required></textarea>
      </label>
      <button type="submit">Send the brief →</button>
    </form>
  </div>
</section>
