\\( \def\A{{\mathbb{A}}} \def\C{{\mathbb{C}}} \def\P{{\mathbb{P}}} \def\Z{{\mathbb{Z}}} \def\Q{{\mathbb{Q}}} \def\N{{\mathbb{N}}} \def\spec{\operatorname{Spec}} \def\oh{\frac{1}{2}} \def\zoh{\Z[\oh]} \\)


# Varieties vs Schemes

To talk about the difference between varieties and schemes, we should have a definition of both in mind.  It is common to introduce varieties **before** introducing schemes.  Later, schemes are introduced in general and varieties are viewed as schemes with certain extra properties.  For instance, in Hartshorne's *Algebraic Geometry*, varieties are introduced in Chapter 1, schemes in Chapter 2.

Here is a standard definition of varieties not involving schemes.  Let \\(k\\) be an algebraically closed field.  A *projective variety over \\(k\\)* is the vanishing sets of homogeneous polynomials in \\(\P\^n (k)\\), for some \\(n \in \N\\).  There is a technicality saying that a variety cannot be written as the union of two varieties, neither of which contains the other.  This is rarely an issue and mostly a matter of convention.

Now that we know what projective varieties are, a *variety* is the complement inside a projective variety of the vanishing set of homogeneous polynomials.  More conceptually, a variety is an open subset of a projective variety.

After a few preliminaries on varieties, schemes are introduced.  I won't go here into the definition of schemes: this might be the content of a later post.  Varieties are re-defined as integral, separated schemes of finite type over a field.

The first difference that catches the eye is that

- **before** the set of points of a variety was a subset of (homogeneous or affine) coordinates of points in \\(\P\^n(k)\\) or \\(\A\^n(k)\\);
- **after** the set of points of a variety is a weird collection of prime ideals, both maximal and non-maximal.

In particular, the maximal ideals are in bijection with the "old" points, while the non-maximal prime ideals do not correspond to anything in the original definition of variety.

| | |
|---|---|
| While this is certainly a good point, I always felt that it failed to address the "real" issue: varieties and schemes were defined in intrinsically different ways and it is a little unsatisfying to compare their definitions. | [In other words: the definition of *variety* is "a subset of \\(\P\^n\\) with some properties"; the definition of *scheme* is "a locally ringed space with some properties".  Of course they are different!  Simply comparing the underlying topological spaces is not good enough for me!] |


Once there is a definition of scheme, a variety are identified with integral, separated, schemes of finite type over a field.  [Hartshorne also requires the field to be algebraically closed, but I will drop this assumption.]  Thus, tautologically, any scheme that does not satisfy at least one of the conditions

1.  integral, splitting further into
      1.  reduced and
      1.  irreducible,
1.  separated,
1.  finite type over a field,

is a scheme that is not a variety.  For instance,

1. \\(\spec \Z\\) is not defined over a field.
1. \\(\spec \Z\\) is not defined over a field (as it is defined over \\(\spec \Z\\), the final element of the category of schemes).

Probably the most striking difference between varieties and schemes is the presence of non-closed points in schemes.  Such points arise from prime ideals in a ring that are not maximal: the points of an affine variety are the maximal ideals of a ring, while the points of an affine scheme are all the prime ideals of the same ring.

However,

Below are some properties that I find capture better the distinction.

Affine schemes are the building blocks of schemes, since any scheme admits an open cover by affine schemes.

Intuitively, an
affine scheme is a subset of \\(\A\^n\\) defined by the vanishing of a set of polynomials.  A little bit more formally,
the vanishing set turns out to only carry partial information.  What "really" carries all the required information is
the "ring of regular functions".  For the vanishing sets \\(X\\) in \\(\A\^n\\) of polynomials, this is, tautologically,
the quotient of \\(k[x\_1,...,x\_n]\\) modulo the ideal of the polynomials defining \\(X\\).  Here, there is a fundamental
subtlety: the subset point of view "forgets" some of the information carried by the ideal!  This also highlights the
main difference between varieties and schemes.  Varieties are determined by their sets of points, at least if the base
field is algebraically closed.  However, schemes package more information and remember the vanishing ideal (or, more
intrinsically, the quotient ring).

This difference is already evident for "zero-dimensional schemes" in \\(\A\^1\\).  The vanishing set of \\(x\\) is the single
point \\(x=0\\).  The same is true for any positive power of \\(x\\): for any integer \\(n \geq 1\\), the vanishing set
of \\(x\^n\\) is the single point \\(x=0\\).  Yet, the ideals \\((x\^n)\\) and \\((x\^m)\\) are only equal if \\(n=m\\).
This means that the schemes \\(k[x]/(x\^n)\\) and \\(k[x]/(x\^m)\\) are only isomorphic if \\(n=m\\), even though the
vanishing sets of the two ideals in \\(\A\^1\\) coincide.

### Running example
\\(\frac{1}{2} \in \Q\\)

### Example
#### The fundamental theorem of algebra
##### Varieties version
A polynomial with coefficients in \\(\C\\) and positive degree admits a root.
##### Schemes version
A polynomial with coefficients in \\(\C\\) and of degree n admits n roots counted with multiplicities.

Schemes are perfectly geared for keeping track of the intuitive notion of multiplicity.  In the varieties statement of
the fundamental theorem of algebra, the degree of a polynomial is only used to rule out constant polynomials.  In the
schemes statement, the theorem asserts that the degree of the polynomial is encoded in the scheme defined by the
vanishing of the polynomial itself.  In a physical analogy, you can think of the degree of a polynomial as a measure of
the mass of the scheme.  A system of particles with positive total mass must have at least one particle.  The scheme
knows the total mass, the variety only knows whether the mass is positive or not.