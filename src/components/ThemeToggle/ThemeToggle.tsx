type Props = {
  toggle: () => void
}

export const ThemeToggle = ({ toggle }: Props) => {
  return (
    <button
      onClick={toggle}
      className="
        relative w-12 h-7
        bg-gray-300 dark:bg-gray-700
        rounded-full
        transition
        active:scale-95
      "
    >
      <div
        className="
          absolute top-1 left-1
          w-5 h-5
          bg-white
          rounded-full
          shadow-md
          transition
          dark:translate-x-5
        "
      />
    </button>
  )
}