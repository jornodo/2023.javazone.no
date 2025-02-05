import { Program } from '@/app/program/program'

interface NextRevalidateConfig {
  revalidate?: false | number
  tags: string[] | undefined
}

export async function fetchProgram(
  {
    revalidateConfig,
  }: {
    revalidateConfig?: NextRevalidateConfig
  } = { revalidateConfig: undefined },
) {
  return await fetch('https://sleepingpill.javazone.no/public/allSessions/javazone_2023', {
    next: revalidateConfig,
  }).then<Program>((res) => res.json())
}

export const fetchIndividualProgram = (id?: string, config?: NextRevalidateConfig) =>
  fetchProgram({ revalidateConfig: config }).then((program) =>
    program.sessions.find((session) => session.id === id),
  )
