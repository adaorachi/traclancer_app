import React from 'react'

export default function ProjectDetails() {
  return (
    <div>
      <div class="col-lg-12 col-xl-6">

        <div class="sub-title">Tab With Icon</div>

        <ul class="nav nav-tabs md-tabs " role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#home7" role="tab" aria-expanded="true"><i class="icofont icofont-home"></i>Home</a>
            <div class="slide"></div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#profile7" role="tab" aria-expanded="false"><i class="icofont icofont-ui-user "></i>Profile</a>
            <div class="slide"></div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#messages7" role="tab" aria-expanded="false"><i class="icofont icofont-ui-message"></i>Messages</a>
            <div class="slide"></div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#settings7" role="tab" aria-expanded="false"><i class="icofont icofont-ui-settings"></i>Settings</a>
            <div class="slide"></div>
          </li>
        </ul>

        <div class="tab-content card-block">
          <div class="tab-pane active" id="home7" role="tabpanel" aria-expanded="true">
            <p class="m-0">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>
          </div>
          <div class="tab-pane" id="profile7" role="tabpanel" aria-expanded="false">
            <p class="m-0">2.Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>
          </div>
          <div class="tab-pane" id="messages7" role="tabpanel" aria-expanded="false">
            <p class="m-0">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>
          </div>
          <div class="tab-pane" id="settings7" role="tabpanel" aria-expanded="false">
            <p class="m-0">4.Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
