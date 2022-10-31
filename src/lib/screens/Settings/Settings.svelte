<script>
import TextBox from "$lib/components/text-box/TextBox.svelte";

</script>
<div class="page-content-wrapper">
    <div class="page-content is-relative">

        <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div class="huro-hamburger nav-trigger push-resize" data-sidebar="layouts-sidebar">
                <span class="menu-toggle has-chevron">
                    <span class="icon-box-toggle">
                        <span class="rotate">
                            <i class="icon-line-top"></i>
                            <i class="icon-line-center"></i>
                            <i class="icon-line-bottom"></i>
                        </span>
                </span>
                </span>
            </div>

            <div class="title-wrap">
                <h1 class="title is-4">Profile Settings</h1>
            </div>

            <div class="toolbar ml-auto">

                <div class="toolbar-link">
                    <label class="dark-mode ml-auto">
                        <input type="checkbox" checked="">
                        <span></span>
                    </label>
                </div>

                <a class="toolbar-link right-panel-trigger huro-hamburger" data-panel="languages-panel">
                    <img src="assets/img/icons/flags/united-states-of-america.svg" alt="">
                </a>

                <div class="toolbar-notifications is-hidden-mobile">
                    <div class="dropdown is-spaced is-dots is-right dropdown-trigger">
                        <div class="is-trigger" aria-haspopup="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                            <span class="new-indicator pulsate"></span>
                        </div>
                        <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                <div class="heading">
                                    <div class="heading-left">
                                        <h6 class="heading-title">Notifications</h6>
                                    </div>
                                    <div class="heading-right">
                                        <a class="notification-link" href="/admin-profile-notifications.html">See all</a>
                                    </div>
                                </div>
                                <ul class="notification-list">
                                    <li>
                                        <a class="notification-item">
                                            <div class="img-left">
                                                <img class="user-photo" alt="" src="assets/img/avatars/photos/7.jpg" data-demo-src="assets/img/avatars/photos/7.jpg">
                                            </div>
                                            <div class="user-content">
                                                <p class="user-info"><span class="name">Alice C.</span> left a comment.</p>
                                                <p class="time">1 hour ago</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="notification-item">
                                            <div class="img-left">
                                                <img class="user-photo" alt="" src="assets/img/avatars/photos/12.jpg" data-demo-src="assets/img/avatars/photos/12.jpg">
                                            </div>
                                            <div class="user-content">
                                                <p class="user-info"><span class="name">Joshua S.</span> uploaded a file.</p>
                                                <p class="time">2 hours ago</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="notification-item">
                                            <div class="img-left">
                                                <img class="user-photo" alt="" src="assets/img/avatars/photos/13.jpg" data-demo-src="assets/img/avatars/photos/13.jpg">
                                            </div>
                                            <div class="user-content">
                                                <p class="user-info"><span class="name">Tara S.</span> sent you a message.</p>
                                                <p class="time">2 hours ago</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="notification-item">
                                            <div class="img-left">
                                                <img class="user-photo" alt="" src="assets/img/avatars/photos/25.jpg" data-demo-src="assets/img/avatars/photos/25.jpg">
                                            </div>
                                            <div class="user-content">
                                                <p class="user-info"><span class="name">Melany W.</span> left a comment.</p>
                                                <p class="time">3 hours ago</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <a class="toolbar-link right-panel-trigger toolbar-link-right" data-panel="activity-panel">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                </a>
            </div>
        </div>

        <div class="page-content-inner">

            <!--Profile Settings-->
            <div class="profile-wrapper">
                <div class="profile-header has-text-centered">
                    <div class="h-avatar is-xl">
                        <img class="avatar" src="assets/img/avatars/photos/8.jpg" data-demo-src="assets/img/avatars/photos/8.jpg" alt="" data-user-popover="3">
                        <img class="badge" src="assets/img/icons/flags/united-states-of-america.svg" data-demo-src="assets/img/icons/flags/united-states-of-america.svg" alt="">
                    </div>
                    <h3 class="title is-4 is-narrow">Erik Kovalsky</h3>
                    <p class="light-text">Hey everyone, Iam a product manager from New York and Iam looking for new
                        opportunities in the software business.</p>
                    <div class="profile-stats">
                        <div class="profile-stat">
                            <i class="lnil lnil-users-alt"></i>
                            <span>500+ Relations</span>
                        </div>
                        <div class="separator"></div>
                        <div class="profile-stat">
                            <i class="lnil lnil-checkmark-circle"></i>
                            <span>78 Projects</span>
                        </div>
                        <div class="separator"></div>
                        <div class="socials">
                            <a><i aria-hidden="true" class="fab fa-facebook-f"></i></a>
                            <a><i aria-hidden="true" class="fab fa-twitter"></i></a>
                            <a><i aria-hidden="true" class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>

                <div class="profile-body">

                    <div class="settings-section">
                        
                        <TextBox title="company" subTitle="Sub Title"/>
                        <TextBox title="Team" subTitle="Manage Team"/>
                        <TextBox title="Projects" subTitle="Project Settings"/>
                        <TextBox title="company" subTitle="Sub Title"/>
                        <TextBox title="company" subTitle="Sub Title"/>
                        <TextBox title="company" subTitle="Sub Title"/>
                        <TextBox title="company" subTitle="Sub Title"/>
                        <TextBox title="company" subTitle="Sub Title"/>
                        
                        <!-- <a class="settings-box">
                            <div class="edit-icon">
                                <i class="lnil lnil-pencil"></i>
                            </div>
                            <div class="icon-wrap">
                                <i class="lnil lnil-users"></i>
                            </div>
                            <span>Team</span>
                            <h3>Manage Team</h3>
                        </a>
                        <a class="settings-box">
                            <div class="edit-icon">
                                <i class="lnil lnil-pencil"></i>
                            </div>
                            <div class="icon-wrap">
                                <i class="lnil lnil-briefcase-alt"></i>
                            </div>
                            <span>Projects</span>
                            <h3>Project Settings</h3>
                        </a>
                        <a class="settings-box">
                            <div class="edit-icon">
                                <i class="lnil lnil-pencil"></i>
                            </div>
                            <div class="icon-wrap">
                                <i class="lnil lnil-lock-alt-1"></i>
                            </div>
                            <span>Permissions</span>
                            <h3>Manage Permissions</h3>
                        </a>
                        <a class="settings-box">
                            <div class="edit-icon">
                                <i class="lnil lnil-pencil"></i>
                            </div>
                            <div class="icon-wrap">
                                <i class="lnil lnil-file-name"></i>
                            </div>
                            <span>Document</span>
                            <h3>Document Policies</h3>
                        </a>
                        <a class="settings-box">
                            <div class="edit-icon">
                                <i class="lnil lnil-pencil"></i>
                            </div>
                            <div class="icon-wrap">
                                <i class="lnil lnil-file-upload"></i>
                            </div>
                            <span>Upload</span>
                            <h3>Upload Policies</h3>
                        </a>
                        <a class="settings-box">
                            <div class="edit-icon">
                                <i class="lnil lnil-pencil"></i>
                            </div>
                            <div class="icon-wrap">
                                <i class="lnil lnil-credit-card"></i>
                            </div>
                            <span>Billing</span>
                            <h3>Billing and Plans</h3>
                        </a>
                        <a class="settings-box">
                            <div class="edit-icon">
                                <i class="lnil lnil-pencil"></i>
                            </div>
                            <div class="icon-wrap">
                                <i class="lnil lnil-bubble"></i>
                            </div>
                            <span>Messaging</span>
                            <h3>Messaging Settings</h3>
                        </a>
                        <a class="settings-box">
                            <div class="edit-icon">
                                <i class="lnil lnil-pencil"></i>
                            </div>
                            <div class="icon-wrap">
                                <i class="lnil lnil-shield"></i>
                            </div>
                            <span>Security</span>
                            <h3>Security Settings</h3>
                        </a>
                        <a class="settings-box">
                            <div class="edit-icon">
                                <i class="lnil lnil-pencil"></i>
                            </div>
                            <div class="icon-wrap">
                                <i class="lnil lnil-cogs"></i>
                            </div>
                            <span>Preferences</span>
                            <h3>General Settings</h3>
                        </a> -->
                    </div>

                </div>

            </div>
        </div>

    </div>
</div>

<style lang="scss" src="./styles.scss"></style>