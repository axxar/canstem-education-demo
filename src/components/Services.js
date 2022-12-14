import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Services() {
  let [categories] = useState({
    'Day School': [
      {
        id: 1,
        title: 'High School Classes',
        content: 'High school, also sometimes called “senior high school” or “secondary high school,” marks the end of compulsory education in Canada. It normally runs from grades 9 to 12. It ends in grade 12 in all provinces except Quebec. In Quebec, after grade 11 students instead proceed to a pre-college or university program such as CEGEP.',
      },
      {
        id: 2,
        title: 'High School Night Classes',
        content: 'CanSTEM Education is also offering Night Classes. Night school typically refers to adult education classes held in the evening hours at middle and high school campuses. For adults, these classes are mainly geared toward personal enrichment and furthering of job or life skills. In other cases, many high schools offer night school as an option for students who are unable to attend day classes or need to retake failed courses to complete the requirements for their high school diplomas.',
      }
    ],
    'High School Credit Courses': [
      {
        id: 1,
        title: 'Credit Course Prerequisites & Information',
        content: 'A prerequisite is an academic requirement, which must be satisfied before or during enrollment in a desired class. Courses in grade 9, 10, 11 & 12 may have prerequisite for enrollment',
      },
      {
        id: 2,
        title: "We also offer",
        content: 'High School credit courses to Adult / Mature Students, International Students and University/College Students (Missing Credits, Grade upgrades, Switching programs in University/COLLEGES). All Main Subjects and Electives (Grade 9 to 12), Fast-tracked batches, Flexible timings, Evening and weekends, 1 to 1 Teaching, extensive course selection (Total 73 High School Courses).'
      },
    ],
    'Tutoring and After School Help': [
      {
        id: 1,
        title: 'Tutoring and After School Help',
        content: 'We offer advanced placement (AP) Course preparation, IB (International Baccalaureate) Course preparation and SAT (Scholastic Assessment Test) course preparation. ' +
        'We offer university and College course tutoring for Math, Sciences and English. ' +
        'Our tutoring program is very effective due to our focus on the Ontario school curriculum, our high experienced teaching staff, who are genuine school teachers with advanced qualifications in their area of teaching. We understand the School grading system being Private school itself and we use our knowledge to guide our students from different school boards across the Greater Toronto Area for highest marks possible. ' +
        'Our Exclusive Reading/Writing program for Elementary and Middle school helps our students to improves test scores across the subjects, engages struggling students, helps build language proficiency and builds confidence. ' +
        'We offer Tutoring for French and ESL (English as a second language).'
      },
      {
        id: 2,
        title: "College and University Tutoring Services",
        content: 'The CanSTEM Education is the ideal way for high school and college students as well as younger learners to find a specialized tutor in the subject(s) they struggle with most. Whether you are worried about passing your next exam or you need help accomplishing your long-term academic goals, you can turn to Tutor Doctor for convenient, reliable in-home tutoring services. Over 95% of our customers would recommend us to others! We offer tutoring services for university and college students in a wide variety of subjects.'
      },
    ]
  })

  return (
    <div className="container p-2">
      <Tab.Group vertical>
        <Tab.List className="flex p-1 bg-blue-400 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 rounded-lg tracking-wide lg:tracking-widest text-sm lg:text-xl font-semibold',
                  'focus:outline-none focus:ring-2 ring-offset-2',
                  selected
                    ? 'bg-green-400 shadow text-dark text-gray-800' 
                    : 'hover:bg-white/40 hover:text-dark bg-blue-400'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'bg-orange-300 rounded-xl p-3'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative p-3 rounded-md hover:bg-coolGray-100"
                  >
                    <h1 className="text-lg lg:text-2xl font-bold leading-relaxed">
                      {post.title}
                    </h1>

                    <p className='text-md lg:text-lg text-black'>
                      {post.content}
                    </p>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}