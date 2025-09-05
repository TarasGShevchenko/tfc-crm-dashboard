# Design decisions

#### The main idea of this application is to demonstrate how to work with a customer management dashboard using React, TypeScript, React Query, and Material UI.
#### The application supports list view with filtering, user details page, and infinite scroll for data loading.
#### Filters were implemented to allow users to narrow down the list of customers by gender, country, city, state, or by free-text search.
#### The customer details page also displays order history, providing additional depth and practical use case simulation.
#### The UI is built with Material UI, which ensures responsiveness, consistency, and fast prototyping.

# Home page

### Open [https://tarasgshevchenko.github.io/tfc-crm-dashboard](https://tarasgshevchenko.github.io/tfc-crm-dashboard) to view it in the browser.

#### The Users page displays a list of customers in a table format.
#### Filters (gender, country, city, state, search) are available at the top. The data is filtered in real-time.
#### Users are loaded with infinite scroll. When reaching the bottom of the list, new users are automatically fetched and displayed.
#### Clicking on a user opens the User details page.

# User details page

#### The user details page shows all available information about the customer, including name, email, phone, address, and other relevant data.
#### A navigation option allows returning back to the list view.
#### Additionally, the page displays the order history of the selected user in a structured list

# Getting Started

## Clone project
#### Clone the project to your local machine
### `git clone git@github.com:TarasGShevchenko/tfc-crm-dashboard.git`

#### Go to the directory where you cloned the project
### `cd tfc-crm-dashboard`

## Setup project

#### Install all required dependencies by running the following commandInstall all required dependencies by running the following command
### `npm install`

## Run project

#### Run the application with the command below
### `npm start`

## Build project

#### Build the application with the command below
### `npm run build`

