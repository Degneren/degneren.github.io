function SetCookie(Name, Value, Expiration)
{
  // Create a date variable that contains
  // the expiration date.
  var ExpDate = new Date();
  if (Expiration != null)
   ExpDate.setDate(ExpDate.getDate() +
           Expiration);
  // Encode the data for storage.
  var CookieValue = escape(Value) +
   "; expires=" + ExpDate.toUTCString();
  // Store the cookie.
  document.cookie = Name + "=" + CookieValue;
}


SetCookie('manuallyBlockedCookie', 'manuallyBlockedCookieValue', 7)