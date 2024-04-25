

const TeamMember = ({ member }) => {
  return (
    <div className="flex flex-col items-start md:items-center">
      <img src={member.image} alt={member.name} className="w-48 h-60 2xl:w-64 2xl:h-72 object-cover object-center rounded-lg mx-auto mb-4" />
      <h3 className="lg:text-xl font-bold">{member.name}</h3>
      <p className="text-xs xl:text-sm text-gray-500">{member.position}</p>
    </div>
  );
};

export default TeamMember;
