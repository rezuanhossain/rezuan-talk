---
layout: layouts/base.njk
title: Home
hero_title: Conversion-first affiliate launches
title_highlight: for ambitious product creators
lead: I’m Rezuan—an affiliate marketing specialist turning product reviews, comparison pages, and lifecycle funnels into profitable revenue streams.
cta_text: Book a discovery call
cta_link: /contact/
---
<section class="hero-immersive" aria-label="Rezuan hero section">
  <div class="hero-atmosphere">
    <div class="hero-beam"></div>
    <div class="hero-beam second"></div>
    <div class="hero-particles" aria-hidden="true"></div>
  </div>
  <div class="hero-grid">
    <div class="hero-intro glass">
      <p class="hero-chip">Affiliate Strategist · CRO Partner · Product Reviewer</p>
      <h1 class="kinetic-title">
        {{ hero_title }}
        <span class="title-gradient">{{ title_highlight }}</span>
      </h1>
      <p class="typewriter" data-words='["Teardown authority funnels.","Refresh dusty affiliate blogs.","Ship shockingly transparent case studies."]'>
        {{ lead }}
      </p>
      <div class="cta-row">
        <a class="btn primary magnetic" href="{{ cta_link }}">Book a discovery call →</a>
        <button class="btn ghost magnetic" data-trigger="reel">Watch case study (2 min)</button>
      </div>
      <form class="hero-form" id="hero-form" name="hero-newsletter" method="post" data-netlify="true">
        <label for="hero-email">Get the “Shockwave” launch audit in your inbox</label>
        <div class="form-row">
          <input id="hero-email" type="email" name="email" placeholder="jamie@fastbrand.com" required />
          <button class="btn primary magnetic" type="submit">Send it →</button>
        </div>
        <small>Daily updates & resource drops. 11,420 marketers reading.</small>
      </form>
      <div class="hero-proof">
        <div>
          <span class="badge">68% YoY revenue lift avg.</span>
          <p><strong>312</strong> review systems deployed across SaaS, creator tools, and fintech.</p>
        </div>
        <div>
          <span class="badge">Live trust pulse</span>
          <p><span class="hero-live-count" data-count="89">89</span> operators browsing the playbooks right now.</p>
        </div>
      </div>
    </div>
    <div class="hero-panel glass">
      <div class="panel-header">
        <p>What brands ping me for</p>
        <div class="panel-radar" aria-hidden="true"></div>
      </div>
      <ul class="panel-stream">
        <li>
          <strong>“Infinite scroll” comparison hubs</strong>
          <p>Gauss-blurred tables with 3D tilt and instant CTA swaps.</p>
        </li>
        <li>
          <strong>Launch Control Rooms</strong>
          <p>Notion + Figma + GA4 dashboards wired with particle alerts.</p>
        </li>
        <li>
          <strong>Creator proof kits</strong>
          <p>Scripts, audio EQ, magnetic bonuses, and hologram-style CTAs.</p>
        </li>
        <li>
          <strong>Glow-up refresh sprints</strong>
          <p>Subsurface buttons, kinetic typography, and CRO experiments.</p>
        </li>
      </ul>
      <div class="stack">
        <span>Ahrefs</span>
        <span>GA4</span>
        <span>Notion SOPs</span>
        <span>Figma</span>
        <span>Descript</span>
        <span>Webflow</span>
        <span>PartnerStack</span>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <h2>Signature service menu</h2>
  <p class="lead">Zero-fluff retainers that help you launch new offers, refresh entire affiliate libraries, and keep tracking clean.</p>
  <div class="cards">
    <article class="card">
      <h3>Review Lab</h3>
      <p>Research, interviews, briefs, and polished copy for premium reviews and long-form comparisons.</p>
      <ul class="list-check">
        <li>Voice-of-customer interviews</li>
        <li>Hands-on testing & photography direction</li>
        <li>Schema, table, and CTA placement</li>
      </ul>
    </article>
    <article class="card">
      <h3>Launch Accelerator</h3>
      <p>Plan every touch point: landing pages, email swipes, webinar outlines, scripts, and retention offer stacks.</p>
      <ul class="list-check">
        <li>Offer & guarantee positioning</li>
        <li>Video + UGC scriptwriting</li>
        <li>Report-ready tracking + UTMs</li>
      </ul>
    </article>
    <article class="card">
      <h3>Optimization Sprint</h3>
      <p>Deep audits of existing content libraries to improve speed, UX, conversion copy, and data instrumentation.</p>
      <ul class="list-check">
        <li>CRO and SEO diagnostics</li>
        <li>Affiliate link QA + monetization ideas</li>
        <li>Refresh calendar with KPI guardrails</li>
      </ul>
    </article>
  </div>
</section>

<section class="section">
  <h2>Featured analysis</h2>
  <p class="lead">High-performing playbooks I ship for fintech, productivity, creator gear, and AI products.</p>
  <div class="featured-posts">
    {% for post in collections.featuredPosts | slice(0, 3) %}
    <article class="post-card">
      <p class="badge">{{ post.data.category }}</p>
      <a href="{{ post.url }}"><h3>{{ post.data.title }}</h3></a>
      <p>{{ post.data.excerpt }}</p>
    </article>
    {% endfor %}
  </div>
  <p><a class="cta" href="/blog/">See the full library →</a></p>
</section>

<section class="section">
  <h2>Client signals</h2>
  <div class="testimonials">
    <article class="testimonial">
      <p>“Rezuan rebuilt our microphone review hub with live test data and new CTAs. Within 6 weeks we owned three featured snippets and affiliates doubled.”</p>
      <strong>— AudioGear Network</strong>
    </article>
    <article class="testimonial">
      <p>“We trusted him with launch sequencing for a fintech partner program. Every deliverable shipped inside Notion with diagrams, and our KPIs beat forecast.”</p>
      <strong>— Finlytics Partners</strong>
    </article>
    <article class="testimonial">
      <p>“His refresh sprint added 41% more revenue without new traffic. He finds practical CRO wins and documents them meticulously.”</p>
      <strong>— CreatorStack Agency</strong>
    </article>
  </div>
</section>

<section class="section">
  <h2>Workflow snapshots</h2>
  <div class="cards">
    <article class="card">
      <h3>Research</h3>
      <p>Keyword mapping, competitor teardowns, offer narrative, and VOC programming to capture emotional triggers.</p>
    </article>
    <article class="card">
      <h3>Production</h3>
      <p>Collaborative outlines, modular sections, multimedia briefs, and CMS-ready copy that respects dev handoffs.</p>
    </article>
    <article class="card">
      <h3>Measurement</h3>
      <p>Looker Studio dashboards, split tests, and Notion-based refresh trackers to keep ROI transparent.</p>
    </article>
  </div>
</section>

<section class="section">
  <div class="hero-card" style="text-align:center;">
    <h2>Ready to build a trustworthy affiliate engine?</h2>
    <p>I’ll join as an embedded strategist, collaborate with your product and revenue teams, and own the editorial calendar.</p>
    <a class="cta" href="/contact/">Message Rezuan →</a>
  </div>
</section>
