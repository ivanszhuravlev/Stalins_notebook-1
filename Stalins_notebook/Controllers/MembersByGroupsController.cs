using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Stalins_notebook.Models;

namespace Stalins_notebook.Controllers
{
    public class MembersByGroupsController : ApiController
        
    {
        private NotebookContext db = new NotebookContext();
        // GET: api/MembersByGroups
        //public IEnumerable<string> Get()
       // {
        //    return new string[] { "value1", "value2" };
       // }

        // GET: api/MembersByGroups/5
        public List<Contact> Get(int idgroup)
        {
            int[] idsMember = db.MembersGroups.Where(g => g.GroupId == idgroup).Select(g => g.MemberId).ToArray();
            List<Contact> membersGroupArray = new List<Contact>();
            for (int i = 0; i < idsMember.Count(); i++)
            {
                membersGroupArray.Add(db.Contacts.Find(idsMember[i]));
            }

            return membersGroupArray;
        }

        // POST: api/MembersByGroups
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/MembersByGroups/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/MembersByGroups/5
        public void Delete(int id)
        {
        }
    }
}
