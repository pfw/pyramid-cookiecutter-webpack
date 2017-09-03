{{ cookiecutter.project_name }}
===============================

This is a starter project using Pyramid as the webserver and Webpack to build
assets.

Install and set up necessary packages::

  $ virtualenv env
  $ source env/bin/activate
  $ pip install --upgrade pip
  $ pip install -e .
  $ npm install

Start the webpack build::

  $ npm run watch

In a separate terminal, start the Pyramid server::

  $ pserve --reload development.ini


Distributing
------------

To bundle your application for distribution, run::

  $ npm run build-prod

This will create a source bundle inside ``dist``. You can now ``pip install``
that in any virtualenv and run ``pserve production.ini`` to start your app.

Note that this method is simply bundling the assets with your python package.
You may want to put your assets into a CDN, or host them statically (e.g. with
NGINX). For that your production build steps should include copying the webpack
files to the desired destination and using that destination as the
`webpack.static_view_name
<http://pyramid-webpack.readthedocs.io/en/latest/topics/configuration.html#webpack-static-view-name>`_.
