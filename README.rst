pyramid-cookiecutter-webpack
============================
A Cookiecutter (project template) for creating a Pyramid project using webpack to bundle assets

Requirements
------------
* `cookiecutter <https://cookiecutter.readthedocs.io/en/latest/installation.html>`_

Usage
-----
Generate a Pyramid project::

  $ cookiecutter gh:stevearc/pyramid-cookiecutter-webpack

Install and set up necessary packages::

  $ cd <your project>
  $ virtualenv env
  $ source env/bin/activate
  $ pip install --upgrade pip
  $ pip install -e .
  $ npm install

Start the webpack build::

  $ npm run watch

In a separate terminal, start the Pyramid server::

  $ pserve --reload development.ini
