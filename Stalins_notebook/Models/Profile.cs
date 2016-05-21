using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Stalins_notebook.Models
{
    public class Profile
    {
        public int ProfileId { get; set; }
        public string Email { get; set; }
        public string Skype { get; set; }
        public string Telephone { get; set; }
    }
}