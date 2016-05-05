using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace Stalins_notebook.Models
{
    public class NotebookContext : DbContext //Тут создаем контекст данных  - область видимости базы данных
    { //Далее включаем в БД Отношения (таблицы) 
        public DbSet<Contact> Contacts { get; set; } //Положить в БД таблицу COntacts, имеющую атрибуты класса Contact
        public DbSet<Group> Groups { get; set; }
        public DbSet<MembersGroup> MembersGroups { get; set; }
    }
}