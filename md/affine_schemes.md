<script src="/MathJax/MathJax.js?config=TeX-AMS_CHTML,local/local"></script>

\\( \def\A{{\mathbb{A}}} \def\C{{\mathbb{C}}} \def\Z{{\mathbb{Z}}} \def\Q{{\mathbb{Q}}} \def\N{{\mathbb{N}}} \def\spec{\operatorname{Spec}} \def\oh{\frac{1}{2}} \def\zoh{\Z[\oh]} \\)


# Affine schemes

Affine schemes are the building blocks of schemes.  A scheme admits an open cover by affine schemes.  Intuitively, an affine scheme is a subset of \\(\A\^n\\) defined by the vanishing of a set of polynomials.  A little bit more formally, the vanishing set turns out to only carry partial information.  What "really" carries all the required information is the "ring of regular functions".  For the vanishing sets \\(X\\) in \\(\A\^n\\) of polynomials, this is, tautologically, the quotient of \\(k[x\_1,...,x\_n]\\) modulo the ideal of the polynomials defining X.  Here, there is a fundamental subtlety: the subset point of view "forgets" some of the information carried by the ideal!  This also highlights the main difference between varieties and schemes.  Varieties are determined by their sets of points, at least if the base field is algebraically closed.  However, schemes package more information and remember the vanishing ideal (or, more intrinsically, the quotient ring).

This difference is already evident for "zero-dimensional schemes" in \\(\A\^1\\).  The vanishing set of x is the single point \\(x=0\\).  The same is true for any positive power of \\(x\\): for any integer \\(n \geq 1\\), the vanishing set of \\(x\^n\\) is the single point \\(x=0\\).  Yet, the ideals \\((x\^n)\\) and \\((x\^m)\\) are only equal if \\(n=m\\).  This means that the schemes \\(k[x]/(x\^n)\\) and \\(k[x]/(x\^m)\\) are only isomorphic if \\(n=m\\), even though the vanishing sets of the two ideals coincide.

### Running example
\\(\frac{1}{2} \in \Q\\)

### Example
#### The fundamental theorem of algebra
##### Varieties version
A polynomial with coefficients in \\(\C\\) and positive degree admits a root.
##### Schemes version
A polynomial with coefficients in \\(\C\\) and of degree n admits n roots counted with multiplicities.

Schemes are perfectly geared for keeping track of the intuitive notion of multiplicity.  In the varieties statement of the fundamental theorem of algebra, the degree of a polynomial is only used to rule out constant polynomials.  In the schemes statement, the theorem asserts that the degree of the polynomial is encoded in the scheme defined by the vanishing of the polynomial itself.  In a physical analogy, you can think of the degree of a polynomial as a measure of the mass of the scheme.  A system of particles with positive total mass must have at least one particle.  The scheme knows the total mass, the variety only knows whether the mass is positive or not.