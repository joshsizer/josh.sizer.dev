FROM nginx

# set up sites-available and sites enabled
RUN mkdir /etc/nginx/sites-available/
RUN mkdir /etc/nginx/sites-enabled/

# add each site-specific config to sites-available
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/sites-available/

# link each site in sites-available to sites-enabled
RUN ln -s /etc/nginx/sites-available/josh.sizer.dev.conf /etc/nginx/sites-enabled/josh.sizer.dev.conf
