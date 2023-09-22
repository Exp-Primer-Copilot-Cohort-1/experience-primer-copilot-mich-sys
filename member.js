function skillMember (member) {
  return {
    id: member.id,
    name: member.name,
    email: member.email,
    phone: member.phone,
    skills: member.skills.map(skill => skill.id)
  }
}