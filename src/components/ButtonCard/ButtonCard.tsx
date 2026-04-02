type Props = {
  title: string
  icon: string
  url: string
}

export const ButtonCard = ({ title, icon, url }: Props) => {
  return (
    <a
      href={url}
      className="
        group
        flex flex-col items-center justify-center
        gap-2
        p-5
        rounded-2xl

        bg-white/80 dark:bg-darkcard/80
        backdrop-blur-md

        text-gray-800 dark:text-gray-100

        transition-all duration-200

        active:scale-95
        active:shadow-inner

        hover:-translate-y-1 hover:shadow-xl

        border border-black/5 dark:border-white/10
      "
    >
      <div
        className="
          p-3 rounded-xl
          bg-gradient-to-br from-red-500 to-red-400
          shadow-md

          transition
          group-active:scale-90
        "
      >
        <img src={icon} className="w-6 h-6 text-white" />
      </div>

      <span className="text-xs font-medium text-center leading-tight">
        {title}
      </span>
    </a>
  )
}