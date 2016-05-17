using System;
using System.Collections.Generic;
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
    public class MembersGroupsController : ApiController
    {
        private NotebookContext db = new NotebookContext();

        // GET: api/MembersGroups
        public IQueryable<MembersGroup> GetMembersGroups()
        {
            return db.MembersGroups;
        }

        // GET: api/MembersGroups/5
        [ResponseType(typeof(MembersGroup))]
        public async Task<IHttpActionResult> GetMembersGroup(int id)
        {
            MembersGroup membersGroup = await db.MembersGroups.FindAsync(id);
            if (membersGroup == null)
            {
                return NotFound();
            }

            return Ok(membersGroup);
        }

        // PUT: api/MembersGroups/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutMembersGroup(int id, MembersGroup membersGroup)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != membersGroup.MembersGroupId)
            {
                return BadRequest();
            }

            db.Entry(membersGroup).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MembersGroupExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/MembersGroups
        [ResponseType(typeof(MembersGroup))]
        public async Task<IHttpActionResult> PostMembersGroup(MembersGroup membersGroup)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.MembersGroups.Add(membersGroup);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = membersGroup.MembersGroupId }, membersGroup);
        }

        // DELETE: api/MembersGroups/5
        [ResponseType(typeof(MembersGroup))]
        public async Task<IHttpActionResult> DeleteMembersGroup(int id)
        {
            MembersGroup membersGroup = await db.MembersGroups.FindAsync(id);
            if (membersGroup == null)
            {
                return NotFound();
            }

            db.MembersGroups.Remove(membersGroup);
            await db.SaveChangesAsync();

            return Ok(membersGroup);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MembersGroupExists(int id)
        {
            return db.MembersGroups.Count(e => e.MembersGroupId == id) > 0;
        }
    }
}