using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TemalabAPI.Models;

namespace TemalabAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuItemsController : ControllerBase
    {
        private readonly MenuContext _context;

        public MenuItemsController(MenuContext context)
        {
            _context = context;
        }

        // GET: api/MenuItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MenuItem>>> GetMenuItems()
        {
          if (_context.MenuItems == null)
          {
              return NotFound();
          }
            return await _context.MenuItems.ToListAsync();
        }

        // GET: api/MenuItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MenuItem>> GetMenuItem(long id)
        {
          if (_context.MenuItems == null)
          {
              return NotFound();
          }
            var menuItem = await _context.MenuItems.FindAsync(id);

            if (menuItem == null)
            {
                return NotFound();
            }

            return menuItem;
        }

        // PUT: api/MenuItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMenuItem(long id, MenuItem menuItem)
        {
            if (id != menuItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(menuItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MenuItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/MenuItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MenuItem>> PostMenuItem(MenuItem menuItem)
        {
          if (_context.MenuItems == null)
          {
              return Problem("Entity set 'MenuContext.MenuItems'  is null.");
          }
            _context.MenuItems.Add(menuItem);
            await _context.SaveChangesAsync();

            // return CreatedAtAction("GetMenuItem", new { id = menuItem.Id }, menuItem);
            return CreatedAtAction(nameof(GetMenuItem), new { id = menuItem.Id }, menuItem);
        }

        // DELETE: api/MenuItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMenuItem(long id)
        {
            if (_context.MenuItems == null)
            {
                return NotFound();
            }
            var menuItem = await _context.MenuItems.FindAsync(id);
            if (menuItem == null)
            {
                return NotFound();
            }

            _context.MenuItems.Remove(menuItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MenuItemExists(long id)
        {
            return (_context.MenuItems?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
