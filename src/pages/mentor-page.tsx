import { Link } from "react-router-dom"

import { mentorProfiles } from "@/data/site"

export function MentorPage() {
  return (
    <>
      <section className="section-gap pt-10">
        <div className="brand-container space-y-14">
          <div className="w-full">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20ad96]">Our team</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.8rem]">
              学屿团队
            </h2>
            <p className="mt-6 max-w-none leading-8 text-slate-600">
              在学屿，有着一群怀揣理想追求生活的学长学姐。我们用心书写每一段海外求学的故事，努力打破求学路上的种种壁垒。无论是异国他乡的文化碰撞，还是学术之路的探索，我们都愿与你一同探讨，共同成长。
            </p>
            <p className="mt-4 max-w-none leading-8 text-slate-600">
              我们的主导师团队由北美藤校、英国牛剑 G5、欧陆招生官、港三新二等顶尖名校精英组成，跨时区、跨地域提供全程咨询与监督辅导。
            </p>
          </div>

          <div id="mentor-grid">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20ad96]">Mentor representative</p>
              <h3 className="mt-3 text-3xl font-semibold text-slate-900">导师代表</h3>
              <p className="mt-3 text-slate-600">寻找与你志趣相同的学长学姐，作为学科过来人一起走过申请旅程。</p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {mentorProfiles.map((mentor) => (
                <article key={mentor.name} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  <img src={mentor.image} alt={mentor.name} className="h-56 w-full rounded-xl object-cover" />
                  <h4 className="mt-4 text-lg font-semibold text-slate-900">{mentor.name}</h4>
                  <ul className="mt-3 space-y-1 text-sm leading-7 text-slate-600">
                    {mentor.highlights.map((text) => (
                      <li key={text}>• {text}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 px-8 py-10 text-center text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">be a mentor</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">想要加入我们吗？</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              欢迎志同道合、有理想的同学加入学屿导师团队，和我们一起帮助更多学生走向世界名校。
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-full bg-[#20ad96] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a9b86]"
            >
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
