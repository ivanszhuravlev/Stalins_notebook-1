using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace Stalins_notebook.Models
{
    public class NotebookContext : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }
    }
}