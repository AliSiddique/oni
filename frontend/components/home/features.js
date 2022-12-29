import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Invite team members',
    description:
      'Quam a velit animi fuga ad. Accusamus consectetur nulla perferendis quam. Aperiam error iusto id eos.',
  },
  {
    name: 'Notifications',
    description: 'Ut excepturi sequi et corrupti. Quidem est non ipsam sunt voluptatem. Velit dicta iusto. Molestiae.',
  },
  {
    name: 'List view',
    description:
      'Quis ratione necessitatibus ullam id animi iure accusamus debitis voluptas. Cumque debitis exercitationem.',
  },
  {
    name: 'Boards',
    description:
      'Quae et accusantium quo molestiae sed sit ut quo. Quidem omnis iure et maiores porro. Eligendi deserunt.',
  },
  {
    name: 'Keyboard shortcuts',
    description: 'Optio assumenda eos neque. Quaerat temporibus dicta provident. Quia unde quo aut aut molestiae sit..',
  },
  {
    name: 'Reporting',
    description: 'Excepturi sed quo mollitia voluptatibus. Qui quo ut nihil quo. Dolor at dignissimos ea voluptatem.',
  },
  {
    name: 'Calendars',
    description:
      'Illum nesciunt odio. Dolorem nobis labore eveniet consequatur quas aut delectus molestias. Qui recusandae.',
  },
  {
    name: 'Mobile app',
    description:
      'Aut velit est eius dolore repudiandae. Vitae temporibus amet possimus mollitia. Quia molestiae rerum.',
  },
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All-in-one platform</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-600">
            Quia est qui aut velit exercitationem repudiandae voluptatem facilis. Neque est debitis dolor facilis ab
            amet.
          </p>
        </div>
        <dl className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute mt-1 h-6 w-6 text-indigo-600" aria-hidden="true" />
                <p className="ml-10 text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
