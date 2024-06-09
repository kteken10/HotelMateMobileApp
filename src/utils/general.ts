export const formatNumber = (str: string, sep = "."): string => {
  if (
    str.length === 0 ||
    parseFloat(str) === 0 ||
    str?.length === 0 ||
    str === ""
  ) {
    return str
  }

  const localString = str.trim().replace(/[" "]/gi, "")

  if (parseFloat(localString) >= 0) {
    if (localString.split(".").length > 1) {
      const words = localString.split(".")
      return words[0] + "," + words[1].slice(0, 2)
    }

    if (localString?.length <= 3) {
      return localString
    }
    return localString.length > 0
      ? `${formatNumber(
          localString.slice(0, -3),
          sep
        )}${sep}${localString.slice(localString.length - 3)}`
      : "0"
  } else {
    return "-" + formatNumber(localString.slice(1))
  }
}

// Convertit les secondes en minutes:secondes
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  return `0${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
}
