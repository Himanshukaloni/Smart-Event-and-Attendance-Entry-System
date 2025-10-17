document.addEventListener('DOMContentLoaded', () => {
  const eventType = document.getElementById('eventType');
  const teamSection = document.getElementById('teamSection');
  const form = document.getElementById('registrationForm');
  const message = document.getElementById('message');

  eventType.addEventListener('change', () => {
    teamSection.style.display = eventType.value === 'team' ? 'block' : 'none';
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      eventType: eventType.value,
      teamMembers: document.getElementById('teamMembers').value
    };

    const res = await fetch('register.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    message.textContent = result.message;
    message.style.color = result.success ? '#00ff99' : '#ff5c5c';
    form.reset();
    teamSection.style.display = 'none';
  });
});
