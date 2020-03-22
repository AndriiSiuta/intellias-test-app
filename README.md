# IntelliasApp

- [ x ] the application should display properly on mobile, tablet and desktop
- [ x ] it should have a fixed navbar on top of the screen with a “company-logo” and the
        name of the logged-in user
- [ x ] it should have a sidebar navbar menu that can be collapsed/minimised (leaving
        visible only the icons) and expanded

- [ x ] it should have a homepage to welcome the user with a title, a full-width picture, a
        “lorem ipsum” paragraph, and a button which also takes to /posts
- [ x ] the route /posts should display in a nice way the list of posts, with title, the first 50
         characters of the body and the name of the user who posted it       
- [ x ] the route /users should display in a nice way the list users, with name, username,
        email and company name
- [ x ] when on the route /posts clicking on the post title a dialog should appear with a more
        detailed view of the post
- [ x ] when on the route /users clicking on the user’s name or username a dialog should
        appear with detailed view of the 
- [ x ] when on the route /posts there should be a button to create a new post, if clicked it
        should open a dialog with a form to create a new post for the logged-in user       

# Optional
- [ x ] when on the route /posts clicking on the name of the user, from both the
        list or detailed view, should navigate to the route /users/{id} which should display the
        list of users and the opened dialog with the detailed view of the user
- [ x ] the lists (/posts and /users) should display as list of row in desktop/tablet
        view and as cards in mobile view
- [ x ] the logged-in user can deleted their own posts from both the list and
        detailed view, when clicking deleted button a confirmation dialog should appear (do but without dialog no time)
        
# Code structure
- I tried to follow best practices when doing my job, so you will not find some issues deal with performance or some
change detection stuff.        
