import { tsParticles } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'
import { loadEmittersPlugin } from '@tsparticles/plugin-emitters'
import { loadTrailEffect } from '@tsparticles/effect-trail'

let init: Promise<void> | null = null

export function initParticles(): Promise<void> {
  init ??= (async () => {
    await loadSlim(tsParticles)
    await loadEmittersPlugin(tsParticles)
    await loadTrailEffect(tsParticles)
  })();
  return init
}