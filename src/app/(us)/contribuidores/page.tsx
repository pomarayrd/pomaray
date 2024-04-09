import { Avatar, Badge, Tooltip } from "@nextui-org/react";
import i18n from "@/locales/creditos.json";
import { Divider } from "@nextui-org/divider";
import G3deon from "@/icons/G3deon";

export default function CreditosContribuidoresPage() {
  return (
    <article className="max-w-5xl mx-auto px-6 sm:px-12 py-4">
      <div className="flex justify-center">
        <h1 className="sm:text-5xl text-4xl font-bold my-4 text-primary">
          {i18n.HERO.TITLE}
        </h1>
      </div>
      <Divider className="bg-primary h-1 rounded-full my-5" />

      {/* Teachers section */}

      <section>
        <h2 className="sm:text-3xl text-2xl text-primary py-5 font-bold justify-center text-align-center items-center text-left">
          {i18n.TEACHERS.TITLE}
        </h2>
        <div className="flex flex-wrap justify-start items-center text-center pt-6 pb-4 gap-10">
          {i18n.TEACHERS.MEMBERS.map((member, index) => (
            <div key={member.ID} className="flex flex-col items-center text-pretty mb-4">
              {(index === 0 || index === 1) && (
                <Avatar
                  radius="md"
                  className="w-28 h-28 border-secondary mb-4"
                  src={member.AVATAR}
                />
              )}
              {(index > 1) && (
                <Avatar
                  size="md"
                  className="w-24 h-24 border-secondary mb-4"
                  src={member.AVATAR}
                />
              )}
              <p className="mb-4">
                {member.NAME.split(" ").slice(0, -1).join(" ")}<br />
                {member.NAME.split(" ").slice(-1)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Frontend team section */}
      <section>
        <h2 className="sm:text-3xl text-2xl text-primary py-6 font-bold justify-center text-align-center items-center text-left">
          {i18n.FRONTEND_TEAM.TITLE}
        </h2>
        <div className="flex flex-wrap justify-start items-center text-center pt-6 pb-4 gap-10">
          {i18n.FRONTEND_TEAM.MEMBERS.map((member, index) => (
            <div key={member.ID} className="flex flex-col items-center text-pretty mb-4">
              {(index === 0 || index === 1) && (
                <Tooltip placement="top" showArrow color="secondary" content="CEO de G3deon">
                  <Badge size="lg" className="size-[2.25rem] fill-white p-1.5 absolute" content={<G3deon />} color="secondary">
                    <Avatar
                      isBordered
                      color="secondary"
                      radius="md"
                      size={index === 0 ? "lg" : "md"}
                      className={`w-${index === 0 ? 28 : 24} h-${index === 0 ? 28 : 24} border-secondary mb-4`}
                      src={member.AVATAR}
                    />
                  </Badge>
                </Tooltip>
              )}
              {index >= 2 && (
                <Avatar
                  size="md"
                  className="w-24 h-24 border-secondary mb-4"
                  src={member.AVATAR}
                />
              )}
              <p className="mb-4">
                {member.NAME.split(" ").slice(0, -1).join(" ")}<br />
                {member.NAME.split(" ").slice(-1)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Backend team section */}
      <section>
        <h2 className="sm:text-3xl text-2xl text-primary py-6 font-bold justify-start text-align-center items-center text-left">
          {i18n.BACKEND_TEAM.TITLE}
        </h2>
        <div className="flex flex-wrap justify-start items-center text-center pt-6 pb-4 gap-10">
          {i18n.BACKEND_TEAM.MEMBERS.map((member, index) => (
            <div key={member.ID} className="flex flex-col items-center text-pretty mb-4">
              {(index === 0) && (
                <Tooltip placement="top" showArrow color="secondary" content="CEO de G3deon">
                  <Badge size="md" className="size-[2.25rem] fill-white p-1.5" content={<G3deon />} color="secondary">
                    <Avatar
                      isBordered
                      color="secondary"
                      radius="md"
                      size="lg"
                      className="w-28 h-28 border-secondary mb-4"
                      src=""
                    />
                  </Badge>
                </Tooltip>
              )}
              {(index !== 0) && (
                <Avatar
                  size="md"
                  className="w-24 h-24 border-secondary mb-4"
                  src={member.AVATAR}
                />
              )}
              <p className="mb-4">
                {member.NAME.split(" ").slice(0, -1).join(" ")}<br />
                {member.NAME.split(" ").slice(-1)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="justify-start">
          <h2 className="sm:text-3xl text-2xl text-balance text-primary py-6 font-bold">
            {i18n.CONTRIBUTORS_TEAM.TITLE}
          </h2>
        </div>
      </section>
    </article>
  );
}
