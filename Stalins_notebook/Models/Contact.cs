using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Stalins_notebook.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Middlename { get; set; }
        public string Phone { get; set; }
        public string Adress { get; set; }
        public string Email { get; set; }
        public string Work { get; set; }
        public string Position { get; set; }
        public string Chief { get; set; }
        public string Image { get; set; }
        public string Notes { get; set; }
        public string Documents { get; set; }
        public string State { get; set; }
        public string Group { get; set; }

        public Contact()
        {
        }
    }
}