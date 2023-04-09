<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Calendar</h3>

  <p align="center">
    A 7-day project
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#specifications">Specifications</a></li>
        <li><a href="#bonus">Bonus</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a 7-day pre-employment assessment test project from NFCtron

live demo: <a href="https://neumie-calendar.netlify.app/" target="_blank">link</a>

<!-- SPECIFICATIONS -->
## Specifications

- the application is developed in React 18
- auxiliary libraries of your own choice
- the application is written and typed in TypeScript (^4.9.0) (Couldn't find that version, so i used v^4.9.5)
- the application is at least visually optimized for desktop resolutions (> 1280px)
- the project has its own git repository

- the application is single-page
- the page contains a calendar view
- the calendar view is shiftable (forwards, backwards)
- the week starts with Monday and ends with Sunday
- the current day (if displayed) is indicated (color tinting, at your discretion)
- each day can contain 0 - n events
- events can be added and removed (in any way, e.g. via a button, by clicking on a day, at your own discretion)
- events do not need to be editable
- the event object contains the following properties:
   - **title** - string, required
   - **from** (time) - date, required
   - **to** (time) - date, required
   - **color** - string, optional

<!-- BONUS -->
### Bonus

- events can be edited
- the form for adding (editing) the event is properly validated
- events can be multi-day (the display stretches over several days)
- "*Today*" button, which scrolls the calendar display to the current day
- the application is fully tuned for mobile resolution
- the application is deployed and available online

### Built With

* Typescript
* React
* Material UI


<!-- FEATURES -->
## Features

* fine tuned for desktops, but still usable on smaller devices
* events are also stored in localStorage

### Header
* "Today" button, which scrolls to current day
* year/month selector with two arrows which shift the month forwards/backwards (monthly view)
* day selector (weekly view)
* view selector that allows you to switch from/to weekly/monthly view

### Legend
* displays current selected date
* event editor which allows you to add/edit events
* event list that shows you 0 - n events for the selected day (becomes scrollable on overflow)
* event list also allows you to start editing events by clicking them (they get transferred to the event editor), or to delete events by clicking on the trash can icon

### Grid
* weekly and monthy calendar view
* highlighted current day (if shown) with a bar on top of the cell
* highlighted selected day
* show's up to n events for each day (depends on the height of the device)
* if event spans for multiple days, then each day cell shows the event
* select a day by clicking on the grid (more information about the day shows on the legend)


<p align="right">(<a href="#readme-top">back to top</a>)</p>
