/**
 * Basic helpers for extracting CLDR locale data affecting Calendars
 *
 * Much of this is taken from private Globalize.js methods.
 *
 */

(function() {

window.Basic = window.Basic || {};

window.Basic.CalendarHelpers = {

  MILLISECONDS_IN_DAY: 24 * 60 * 60 * 1000,

  dateWeekDays: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],

  days: {
    format: {
      "abbreviated": {
        "sun": "Sun",
        "mon": "Mon",
        "tue": "Tue",
        "wed": "Wed",
        "thu": "Thu",
        "fri": "Fri",
        "sat": "Sat"
      },
      "narrow": {
        "sun": "S",
        "mon": "M",
        "tue": "T",
        "wed": "W",
        "thu": "T",
        "fri": "F",
        "sat": "S"
      },
      "short": {
        "sun": "Su",
        "mon": "Mo",
        "tue": "Tu",
        "wed": "We",
        "thu": "Th",
        "fri": "Fr",
        "sat": "Sa"
      },
      "wide": {
        "sun": "Sunday",
        "mon": "Monday",
        "tue": "Tuesday",
        "wed": "Wednesday",
        "thu": "Thursday",
        "fri": "Friday",
        "sat": "Saturday"
      }
    }
  },

  daysOfWeek: function(culture) {
    if (!culture || !culture.cldr) {
      return this.days.format;
    }

    return culture.cldr.main('dates/calendars/gregorian/days/format');
  },

  // Return the index of the "first" day of the week in the indicated culture.
  // In the U.S., this is 0 (Sunday), but in many places it's 1 (Monday).
  // If no culture is supplied, the default culture is used.
  firstDayOfWeek: function(culture) {
    if (!culture || !culture.cldr) {
      return 0;
    }

    return this.dateWeekDays.indexOf(culture.cldr.supplemental.weekData.firstDay());
  },

  daysSinceFirstDayOfWeek: function(date, culture) {
    var firstDayOfWeek = this.firstDayOfWeek(culture);
    return (date.getDay() - firstDayOfWeek + 7) % 7;
  },

  // Return the date of the first day of the week that contains the given date.
  firstDateOfWeek: function(date, culture) {
    var daysSinceFirstDayOfWeek = this.daysSinceFirstDayOfWeek(date, culture);
    var d = this.offsetDateByDays(date, -daysSinceFirstDayOfWeek);
    return this.midnightOnDate(d);
  },

  midnightOnDate: function(date) {
    var d = new Date(date.getTime());
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    d.setMilliseconds(0);
    return d;
  },

  // Return the result of adding/subtracting a number of days to a date.
  // TODO: There are surely gnarly date math bugs here. Ideally some time-geek
  // library should be used for this calculation.
  offsetDateByDays: function(date, days) {
    // Use noon hour for date math, since adding/subtracting multiples of 24 hours
    // starting from noon is guaranteed to end up on the correct date (although
    // the hours might have changed).
    var noon = new Date(date.getTime());
    noon.setHours(11);
    var result = new Date(noon.getTime() + (days * this.MILLISECONDS_IN_DAY));
    // Restore original hours
    result.setHours(date.getHours());
    return result;
  },

  // Returns midnight today.
  today: function() {
    return this.midnightOnDate(new Date());
  }
};

})();