I have an existing website for my app, DaySeed. I want you to add a new "Join the Beta" feature to the existing website.

IMPORTANT: Before making any changes, carefully analyze the existing codebase, website structure, components, styling, colors, typography, spacing, animations, responsiveness, and overall design language.

Do NOT redesign the website.
Do NOT change the core structure of the website.
Do NOT remove or unnecessarily modify existing sections, content, animations, or functionality.
Do NOT introduce a completely different visual style.
The new Beta Testing feature should feel like it was originally designed as part of the existing website.

Goal

I am currently preparing DaySeed for Google Play closed testing. I want interested users to be able to join the DaySeed beta testing program through the website.

Add a clear but visually consistent "Join Beta" or "Become a Beta Tester" call-to-action to the website.

Choose the most appropriate placement based on the existing website structure. If the website already has a hero section with primary/secondary CTA buttons, integrate "Join Beta" naturally without overcrowding the UI.

Beta Section

Add a dedicated section explaining the beta program.

Suggested content:

Join the DaySeed Beta

Be one of the first to experience DaySeed.

Join our early testing program, explore DaySeed before its public release, test its features, and share your feedback to help make DaySeed better.

As a beta tester, you can:

- Get early access to DaySeed.
- Explore the app before the public release.
- Test the core features and notification experience.
- Report bugs or unexpected behavior.
- Share suggestions and feedback.
- Help improve DaySeed for its official launch.

Add a prominent "Join the Beta" button.

Keep the copy concise and adapt it if necessary to match the tone of the existing website.

Join Beta Flow

When the user clicks "Join the Beta", provide a clean and simple way to submit the Google account email address they use with Google Play.

The form should contain:

- Name (optional)
- Google Play email address (required)
- A clear Submit / Join Beta button

Include a short privacy message explaining that the email address will only be used for managing access to the DaySeed beta testing program and related beta communication.

Do not expose submitted email addresses publicly.

Use proper form validation:

- Validate the email format.
- Prevent empty required submissions.
- Show clear validation errors.
- Prevent accidental duplicate submissions where possible.
- Disable the submit button while the request is processing.

After successful submission, show a polished success state such as:

"You're on the list!"

"Thanks for joining the DaySeed Beta. We'll use your submitted Google Play email to provide access to the testing program. You'll receive further instructions when your access is ready."

Do not falsely tell the user that they have already been added to Google Play unless the system actually performs that action.

Data Handling

Inspect the existing technology stack before implementing the form.

If the website already has a backend or database, integrate the beta signup functionality using the existing architecture.

If there is no backend, do NOT introduce a large or unnecessarily complex backend system just for this feature. Choose the simplest secure solution that fits the existing project and clearly explain what was implemented.

Store at minimum:

- Email address
- Name, if provided
- Signup timestamp

Make sure sensitive configuration, API keys, or database credentials are never exposed in frontend code.

Add basic protection against spam and repeated submissions if appropriate for the existing stack.

Design Requirements

The new feature must:

- Match the existing website's color palette.
- Match the existing typography.
- Match existing button styles.
- Match existing border radius, shadows, cards, and spacing.
- Support both light/dark themes if the website already supports them.
- Work properly on mobile, tablet, and desktop.
- Maintain accessibility and readable contrast.
- Include appropriate keyboard navigation and form labels.
- Reuse existing components and design tokens wherever possible.

Do not add unnecessary visual effects.

If the existing website uses animations, use subtle animations consistent with the existing animation system.

Navigation

If appropriate for the current website structure, add a "Join Beta" link or button to the navigation.

Do not overcrowd the navbar.

The navigation CTA should either:

- Scroll smoothly to the Beta section, or
- Open the Beta signup experience if that fits the existing architecture better.

Future-Proofing

Build the feature so that when DaySeed is publicly released, I can easily replace or disable the "Join Beta" CTA and replace it with a "Get it on Google Play" button without redesigning the website.

Keep the implementation modular and easy to remove or modify later.

Final Requirements

Before coding:

1. Analyze the existing website.
2. Identify the best location for the Beta CTA and section.
3. Reuse the existing components and styles wherever possible.

Then implement the feature.

After implementation:

- Check the complete website for visual consistency.
- Test the signup form.
- Test validation and error states.
- Test the success state.
- Test mobile responsiveness.
- Make sure no existing website functionality is broken.
- Make sure the build completes successfully.
- Do not modify unrelated code.

Finally, give me a short summary of:

1. What you changed.
2. Which files you changed or created.
3. How beta signup data is stored.
4. Any environment variables or setup steps I need to configure.
5. How I can view/export the list of beta testers.
6. How I can later replace "Join Beta" with "Get it on Google Play".

If you notice any other improvements that could benefit the DaySeed website, DO NOT implement them automatically. List them separately as optional suggestions and wait for my approval.