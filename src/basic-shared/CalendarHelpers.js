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

  months: {
    format: {
      "abbreviated": {
        "1": "Jan",
        "2": "Feb",
        "3": "Mar",
        "4": "Apr",
        "5": "May",
        "6": "Jun",
        "7": "Jul",
        "8": "Aug",
        "9": "Sep",
        "10": "Oct",
        "11": "Nov",
        "12": "Dec"
      },
      "narrow": {
        "1": "J",
        "2": "F",
        "3": "M",
        "4": "A",
        "5": "M",
        "6": "J",
        "7": "J",
        "8": "A",
        "9": "S",
        "10": "O",
        "11": "N",
        "12": "D"
      },
      "wide": {
        "1": "January",
        "2": "February",
        "3": "March",
        "4": "April",
        "5": "May",
        "6": "June",
        "7": "July",
        "8": "August",
        "9": "September",
        "10": "October",
        "11": "November",
        "12": "December"
      }
    }
  },

  monthsOfYear: function(culture) {
    if (!culture || !culture.cldr) {
      return this.months.format;
    }

    return culture.cldr.main('dates/calendars/gregorian/months/format');
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
  },

  // Is language printed right-to-left?
  isRTL: function(culture) {
    if (!culture || !culture.cldr) {
      return false;
    }

    return culture.cldr.main('layout/orientation/characterOrder') == 'right-to-left';
  }
};

})();